export async function api(API_URL) {
    const url=API_URL
    show()
try {
    const res=await fetch(url)
    if(!res.ok){
        throw new Error(`error with ${url}`)    
    }
    const data=await res.json()
    hide()
    return data
} catch (error) {
    console.error("fetch was not possible :",error.message)
}
}