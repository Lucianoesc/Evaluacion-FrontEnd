const api = async (url) => {

    const response = await fetch(url);

    const { data } = await response.json();

    return data;

}

// Renderizar/Mostrar la informacion obtenida del API en el html //
const render = async ( data ) => {

    const info = await data;
    const body = document.querySelector("#table-body");

    info.forEach(element => {
        console.log(element)
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdID = document.createElement('td');

        tdName.append(element.first_name);
        tdEmail.append(element.email);
        tdID.append(element.id);

        tr.append(tdName, tdEmail, tdID);
        body.append(tr);
    });

}

render(api('https://reqres.in/api/users'));