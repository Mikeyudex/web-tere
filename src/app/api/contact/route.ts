import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 try {
 const body = await request.json();
 
 // In a real application, you would integrate with an email service
 // like Resend, SendGrid, or nodemailer here.
 console.log('Received contact form submission:', body);
 
 return NextResponse.json(
 { message: 'Message successfully sent' },
 { status: 200 }
 );
 } catch (error) {
 return NextResponse.json(
 { message: 'Failed to parse request' },
 { status: 400 }
 );
 }
}
