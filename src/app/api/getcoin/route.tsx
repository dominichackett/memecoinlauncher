import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const {token } = await request.json();

 const query =`query MyQuery {
  TokenLauncher_TokenCreated(where: {token: {_eq: "${token}"}}) {
    description
    image
    name
    symbol
    token
    user
    id
  }
}`

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_ENVIO_ENDPOINT, { method: 'POST',headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query }),})

        if (!response.ok) {
          const errorData = await response.json();
          return NextResponse.json(errorData, { status: response.status });
        }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
