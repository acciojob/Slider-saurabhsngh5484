import React, { useEffect, useState } from "react";


const data = [
    {
        id: 1,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        title: 'office manager',
        quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',
        title: 'regular guy',
        quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',
        title: 'product designer',
        quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: 4,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',
        title: 'the boss',
        quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
];

const Slider = () => {

    let [author, setAuthor] = useState(data[0]);

    function onPrev(id) {
        setAuthor((id == 1) ? data[data.length - 1] : data[id - 2]);
    }

    function onNext(id) {
        setAuthor((id == data.length) ? data[0] : data[id]);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setAuthor((author.id==data.length)?data[0]:data[author.id]);
        }, 3000)
    })

    return (
        <div className="review">
            <h1 id='review-heading'>Reviews</h1>
            <div id='review-container'>
                <img id={`person-${author.id-1}-image`} src={author.image} alt={author.name} width='220px' />
                <p id={`person-${author.id-1}`}>{author.name}</p>
                <p className="job">{author.title}</p>
                <p className="info">{author.quote}</p>
                <button className="prev" onClick={() => { onPrev(author.id) }}>Previous</button>
                <button className="next" onClick={() => { onNext(author.id) }}>Next</button>
            </div>
        </div>
    )
}

export default Slider;