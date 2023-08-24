import {NextResponse} from 'next/server'
import {conDB} from '@/libs/mysql'

export async function GET() {
  
  try {

    const result:any = await conDB.query("SELECT NOW()");
    console.log(result)
    return NextResponse.json({ message: result[0]["now()"] });
  } catch (error) {
    // Manejar el error de manera adecuada
    console.error('Error al consultar la base de datos:', error);
    return NextResponse.json({ error: 'Ocurrió un error al consultar la base de datos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // const data = await request.formData();
    // const image = data.get("image");

    // if (!data.get("name")) {
    //   return NextResponse.json(
    //     {
    //       message: "Name is required",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // if (!image) {
    //   return NextResponse.json(
    //     {
    //       message: "Image is required",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // const buffer = await processImage(image);

    // const res = await new Promise((resolve, reject) => {
    //   cloudinary.uploader
    //     .upload_stream(
    //       {
    //         resource_type: "image",
    //       },
    //       async (err, result) => {
    //         if (err) {
    //           console.log(err);
    //           reject(err);
    //         }

    //         resolve(result);
    //       }
    //     )
    //     .end(buffer);
    // });

    // const result = await conn.query("INSERT INTO product SET ?", {
    //   name: data.get("name"),
    //   description: data.get("description"),
    //   price: data.get("price"),
    //   image: res.secure_url,
    // });

    // return NextResponse.json({
    //   name: data.get("name"),
    //   description: data.get("description"),
    //   price: data.get("price"),
    //   id: result.insertId,
    // });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}