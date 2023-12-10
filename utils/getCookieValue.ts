export default function getCookie(name: string) {

  if (typeof document !== 'undefined') { 
    const cookies = document?.cookie.split(';'); 
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '='))
        return decodeURIComponent(cookie.substring(name.length + 1)); 
    }
  }

  // Return null if the cookie with the given name is not found
  return null; 
}
