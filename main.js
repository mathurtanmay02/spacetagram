const key = 'XJNcrruyvnRhkCImT1dqGMwIi2oR6ZnZsRDlz5ur';
const content = document.querySelector('#content');

function getImage()
{
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=9`)
    .then(Response => Response.json())
    .then(data => {

        console.log(data)
        for(let i=0; i<3; i++)
        {
            console.log(data[i]);
            createbox(data[i]);
        }
    })
    .catch(error => {
        console.log('Error :', error);
    })

}

function createbox(data)
{
    let box = document.createElement('div');
    box.setAttribute('class','box');
    content.appendChild(box);

    let imag = document.createElement('div');
    imag.setAttribute('class','imag');
    box.appendChild(imag);

    let detail = document.createElement('div');
    detail.setAttribute('class','detail');
    box.appendChild(detail);

    let img = document.createElement('img');
    img.setAttribute('src',`${data.url}`);
    imag.appendChild(img);

    let title = document.createElement('h4');
    let explain = document.createElement('p');
    let button = document.createElement('button');
    button.setAttribute('onclick','like(this)');

    title.innerHTML = `${data.title} - ${data.date}`;
    explain.innerHTML = `${data.explanation}`;
    button.innerHTML = "Like";

    detail.appendChild(title);
    detail.appendChild(explain);
    detail.appendChild(button);

}

function like(element)
{
    let emoji = document.createElement('img');
    emoji.setAttribute('src',"heart_Emoji.jpg");
    emoji.setAttribute('onclick','unlike(this)');
    element.parentElement.appendChild(emoji);

    element.remove();

}
 
function unlike(element)
{
    let button = document.createElement('button');
    button.setAttribute('onclick','like(this)');
    element.parentElement.appendChild(button);
    button.innerHTML = "Like";
    
    element.remove();
}

getImage();
