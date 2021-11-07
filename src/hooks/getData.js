export default async function getData(){

    await fetch('../api/data.json').json();

}