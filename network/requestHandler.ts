export class RequestHandler {
  async POST(url: string, data: Object) : Promise<Object> {
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}