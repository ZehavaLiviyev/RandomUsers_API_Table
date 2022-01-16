export default function getRandomUser() {
   
    return fetch(`https://randomuser.me/api/?seed=foobar&results=20`, {})
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            return jsonObject.results;
        }).then((a) => {
            /*  return array 20 users results   */
            return (a);
        });

}