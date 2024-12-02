import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const page = parseInt(searchParams.get('page') || '1');
  // const limit = parseInt(searchParams.get('limit') || '10');

  try {
    // 这里替换为你的实际 API 调用
    const response = await fetch(`https://api.ccw.es/v1/articles`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: '获取攻略列表失败' },
      { status: 500 }
    );
  }
} 