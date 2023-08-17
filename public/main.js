const btn = document.querySelector('button')

const clickHandler = () => {
    axios
        .get('/api/loan')
        .then((res) => alert(res.data))
        .catch((err) => alert("Sad! No loan for you"))
    }

btn.addEventListener('click', clickHandler)