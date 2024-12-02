import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    console.log(111,request);
    const response = await fetch(`https://api.ccw.es/v1/articles/${params.id}`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '获取攻略详情失败' },
      { status: 500 }
    );
  }
} 