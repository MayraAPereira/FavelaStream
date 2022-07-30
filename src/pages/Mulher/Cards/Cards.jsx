import './cards.css'

function Cards({ title, img, children}) {
    return(
       <div className='card'>
        <h3 className='card-title'>{title}</h3>
        <img className='card-img' src={img} />
        <p className='card-texto'>{children}</p>
       </div>
    )
}

export default Cards 
/*function Cards () {
    return(
        <div className="card">
        <p>
                
        <a href="https://www.twitch.tv/nyviestephan">
        <img src="https://vejasp.abril.com.br/wp-content/uploads/2021/07/Nyvi-Stephen-DIVULGACAO.jpg?quality=70&strip=info&crop=0px%2C822px%2C4016px%2C2730px&resize=680%2C453" alt="foto de Nyvi com fones de ouvido" />  
        Nyvi
        </a>
        </p>
        <p>
            <a href="https://www.tiktok.com/@thallitaxavier">

            </a>
        </p>

        <p>
            <a href="https://www.twitch.tv/belrodrigues">
            </a>
        </p>

        <p>
            <a href="https://www.fb.gg/samiraclose/">
                Samira Flor 
                <img src="https://scontent.fssz1-1.fna.fbcdn.net/v/t39.30808-6/287783848_562760088624471_5060184161858788591_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEUgSB9B6smj_MkDja2gmsjXm5FPsXUQ5pebkU-xdRDmlJ9t10CTZdXGrwNHrWhGgRq1hjrAlQWBocKUuLdzv4C&_nc_ohc=M_RsOx8okUIAX9AHQQm&_nc_ht=scontent.fssz1-1.fna&oh=00_AT-apLUQtZfwPyefntzT2azZyNXqC-PCY1WUY3JeLclrcQ&oe=62E8706B" alt="" />
            </a>
        </p>

    </div>
    )
}*/