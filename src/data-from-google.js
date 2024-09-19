async function getSheet() {
    const url = 'https://sheets.googleapis.com/v4/spreadsheets/1C1ZdvbQ5S7nyWKrT_saSPuQYroXTXdIsuyomgx0OBX8/values:batchGet?ranges=A2:A&key=AIzaSyCkpXVg5J3mo-cnP3g5T6k5z8OQ3VYGJCI';
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => reject('Time Limit Exceeded'), 10000);
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert('Ошибка HTTP: ' + response);
            }
        })
            .then(json => {
                clearTimeout(timeout);
                resolve(json);
            });
    });
}

async function getQuestionList() {
    let values = [];
    await getSheet().then(res => {
        values = res.valueRanges[0].values;
    });

    return values;
}

export { getQuestionList };
