export async function get() {
  const accessToken = '';
  const instanceUrl = 'https://defcon.social';  
  
  try {
    const response = await fetch(`${instanceUrl}/api/v1/timelines/home`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      return new Response('Error fetching timeline', { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response('Error fetching timeline', { status: 500 });
  }
}