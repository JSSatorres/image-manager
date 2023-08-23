import {NextResponse} from 'next/server'

export function GET() {
  return NextResponse.json('listado')
}

export function POST() {
  return NextResponse.json('creando')
}