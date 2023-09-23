import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json({ data: [
            {
                id: 1, path: "/arduino/resistor.png", shortDescription: "Led Vermelho"
            },
            {
                id: 1, path: "/arduino/botao.png", shortDescription: "Led Vermelho"
            },
            {
                id: 1, path: "/arduino/led.png", shortDescription: "Led Vermelho"
            }
        ] })
}
