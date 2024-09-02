//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/IOracle.sol";

contract MemeBotMarketing {


    struct Message {
        string role;
        string content;
    }

     struct BotSession {
        address user;
        Message[] messages;
        uint messagesCount;
        bool isFinished;
    }

     

      mapping(uint => BotSession) private botsessions;
      mapping(address=> uint[]) private mybotsessions;

      uint private botsessionsCount;

      event BotSessionCreated(address indexed owner, uint indexed sessionId);
      event OracleResponse(uint indexed  sessionId,address user,string response,string role,uint responseDate);
      address private owner;
      address public oracleAddress;
      address public botAddress;
      IOracle.OpenAiRequest  private config;
      event OracleAddressUpdated(address indexed newOracleAddress);
      event BotAddressUpdated(address indexed newBotAddress);

      constructor(
        address initialOracleAddress,address initialBotAddress 
    ) {
        owner = msg.sender;
        oracleAddress = initialOracleAddress;
        botAddress = initialBotAddress;
        botsessionsCount = 0;

             config = IOracle.OpenAiRequest({
            model : "gpt-4-turbo-preview",
            frequencyPenalty : 21, // > 20 for null
            logitBias : "", // empty str for null
            maxTokens : 1000, // 0 for null
            presencePenalty : 21, // > 20 for null
            responseFormat : "{\"type\":\"text\"}",
            seed : 0, // null
            stop : "", // null
            temperature : 10, // Example temperature (scaled up, 10 means 1.0), > 20 means null
            topP : 101, // Percentage 0-100, > 100 means null
            tools : "[{\"type\":\"function\",\"function\":{\"name\":\"web_search\",\"description\":\"Search the internet\",\"parameters\":{\"type\":\"object\",\"properties\":{\"query\":{\"type\":\"string\",\"description\":\"Search query\"}},\"required\":[\"query\"]}}},{\"type\":\"function\",\"function\":{\"name\":\"image_generation\",\"description\":\"Generates an image using Dalle-2\",\"parameters\":{\"type\":\"object\",\"properties\":{\"prompt\":{\"type\":\"string\",\"description\":\"Dalle-2 prompt to generate an image\"}},\"required\":[\"prompt\"]}}}]",
            toolChoice : "auto", // "none" or "auto"
            user : "" // null
        });
    }

        function startBotSession(string memory prompt,address user ) public returns (uint i) {
                require(msg.sender == botAddress,"Unauthorized sender or bot address");

                BotSession storage botsession = botsessions[botsessionsCount];

        botsession.user= msg.sender;
        
        
         uint currentId = botsessionsCount;
         botsessionsCount = currentId + 1; 
        
        Message memory userMessage;
        userMessage.role = "user";
        botsession.messagesCount++;
        userMessage.content = prompt;
        botsession.user =user;
        botsession.messages.push(userMessage);

        IOracle(oracleAddress).createOpenAiLlmCall(currentId, config);
 
        emit BotSessionCreated(msg.sender, currentId);

        return currentId;

        }

   modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracleAddress, "Caller is not oracle");
        _;
    }

    function setOracleAddress(address newOracleAddress) public onlyOwner {
        oracleAddress = newOracleAddress;
        emit OracleAddressUpdated(newOracleAddress);
    }

 function setBotAddress(address newBotAddress) public onlyOwner {
        botAddress = newBotAddress;
        emit BotAddressUpdated(newBotAddress);
    }

 function onOracleOpenAiLlmResponse(
        uint runId,
               IOracle.OpenAiResponse memory response,
        string memory errorMessage
    ) public onlyOracle {

         BotSession storage botsession = botsessions[runId];
        require(
            !botsession.isFinished, "Session is finished"
        );
          require(
            compareStrings(botsession.messages[botsession.messagesCount-1].role, "user") || botsession.messagesCount >= 1,
            "No message to respond to"
        );


        if (!compareStrings(errorMessage, "")) {
             Message memory assistantMessage;
            assistantMessage.content = "error";
            assistantMessage.role = "assistant";
            botsession.messages.push(assistantMessage);
        } else {
             Message memory assistantMessage;
        assistantMessage.content = response.content;
        assistantMessage.role = "assistant";
        botsession.messages.push(assistantMessage);
        }
        botsession.messagesCount++;
        emit OracleResponse(runId,botsession.user,response.content,"assistant",block.timestamp);


    }

    function onOracleFunctionResponse(
        uint runId,
        string memory response,
        string memory errorMessage
    ) public onlyOracle {
        BotSession storage botsession = botsessions[runId];
        require(
            !botsession.isFinished, "botsession is finished"
        );
        if (!compareStrings(errorMessage, "")) {
            Message memory assistantMessage;
            assistantMessage.content = "error";
            assistantMessage.role = "assistant";
            botsession.messages.push(assistantMessage);
        
        } else {
             Message memory assistantMessage;
        assistantMessage.content = response;
        assistantMessage.role = "assistant";
        botsession.messages.push(assistantMessage);
        }
        botsession.messagesCount++;
        emit OracleResponse(runId,botsession.user,response,"image",block.timestamp);

    }

       function image(string memory prompt,uint botsessionId)  public {
          require(msg.sender == botAddress,"Unauthorized sender or bot address");
           IOracle(oracleAddress).createFunctionCall(
                botsessionId,
                "image_generation",
                prompt
            );
       }



       

     function getMessageHistoryContents(uint botsessionId) public view returns (string[] memory) {
        string[] memory messages = new string[](botsessions[botsessionId].messages.length);
        for (uint i = 0; i < botsessions[botsessionId].messages.length; i++) {
            messages[i] = botsessions[botsessionId].messages[i].content;
        }
        return messages;
    }

    function getMessageHistoryRoles(uint botsessionId) public view returns (string[] memory) {
        string[] memory roles = new string[](botsessions[botsessionId].messages.length);
        for (uint i = 0; i < botsessions[botsessionId].messages.length; i++) {
            roles[i] = botsessions[botsessionId].messages[i].role;
        }
        return roles;
    }
    
   
     function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function finalizeSession(uint botsessionId) public{
      require(msg.sender == botAddress,"Unauthorized sender or bot address");
      botsessions[botsessionId].isFinished = true;

   }

}