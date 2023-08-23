import {NextResponse} from 'next/server'

export function GET() {
  return NextResponse.json('listado uno')
}

export function PUT() {
  return NextResponse.json('PUT')
}

export function DELETE() {
  return NextResponse.json('listado DELETE')
}
