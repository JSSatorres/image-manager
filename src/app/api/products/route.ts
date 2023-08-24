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

export function POST() {
  return NextResponse.json('creando')
}