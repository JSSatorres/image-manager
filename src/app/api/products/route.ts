import {NextResponse} from 'next/server'
import {conDB} from '@/libs/mysql'

interface DatabaseProduct {
  idProduct: number;
  Name: string;
  createdAt: string;
  description: string;
  price: number;
}

// interface RequestBody {
//   name: string;
//   description: string;
//   price: number;
//   id:string
// }

export async function GET(): Promise<NextResponse> {
  try {
    const results = await conDB.query<DatabaseProduct[]>("SELECT * FROM product");
    return NextResponse.json(results);
  } catch (error ) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }else {
      return NextResponse.json(
        { message: "An unknown error occurred" },
        {
          status: 500,
        }
      );
    }   
  }
}


export async function POST(request:Request): Promise<NextResponse> {
  try {
    const { name, description, price } = await request.json();
    console.log(name, description, price);

    const result = await conDB.query<DatabaseProduct[]>("INSERT INTO product SET ?", {
      name,
      description,
      price,

    });

    return NextResponse.json({ name, description, price });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}