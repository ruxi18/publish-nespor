window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        document.querySelector('.cover').classList.add('hidden');
    } else {
        document.querySelector('.cover').classList.remove('hidden');
    }
});


const letterLinks = document.querySelectorAll( '.column1 span' );
const letterImages = document.querySelectorAll( '.column3 .image img:not(:first-child' );

const displayCharacter = event => {
    const letterLink = event.currentTarget;

    const currentLetterImageId = letterLink.attributes.class.value;
    console.log (currentLetterImageId)
    const currentLetterImage = document.getElementById( `img-${ currentLetterImageId }` );

    letterImages.forEach( letterImage => {
        letterImage.style.display = ( letterImage == currentLetterImage ) ? 'block' : '';

    } );
}
const hideCharacters = ( ) => {
    letterImages.forEach( letterImage => letterImage.style.display = '' );
}

letterLinks.forEach( letterLink => {
    letterLink.addEventListener( 'mouseenter', displayCharacter );
    letterLink.addEventListener( 'mouseleave', hideCharacters );
} );




let angle = 0; // Initial rotation angle
        const img = document.getElementById('poza2');

        img.addEventListener('click', function() {
            angle += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle}deg)')
            this.style.transform = `rotate(${angle}deg)`; // Apply the rotation
        });


        let angle3 = 0; // Initial rotation angle
        const img3 = document.getElementById('poza3');

        img3.addEventListener('click', function() {
            angle3 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle3}deg)')
            this.style.transform = `rotate(${angle3}deg)`; // Apply the rotation
        });


        let angle4 = 0; // Initial rotation angle
        const img4 = document.getElementById('poza4');

        img4.addEventListener('click', function() {
            angle4 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle4}deg)')
            this.style.transform = `rotate(${angle4}deg)`; // Apply the rotation
        });


        let angle5 = 0; // Initial rotation angle
        const img5 = document.getElementById('poza5');

        img5.addEventListener('click', function() {
            angle5 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle5}deg)')
            this.style.transform = `rotate(${angle5}deg)`; // Apply the rotation
        });


        let angle6 = 0; // Initial rotation angle
        const img6 = document.getElementById('poza6');

        img6.addEventListener('click', function() {
            angle6 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle6}deg)')
            this.style.transform = `rotate(${angle6}deg)`; // Apply the rotation
        });
        

        let angle7 = 0; // Initial rotation angle
        const img7 = document.getElementById('poza7');

        img7.addEventListener('click', function() {
            angle7 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle7}deg)')
            this.style.transform = `rotate(${angle7}deg)`; // Apply the rotation
        });


        let angle8 = 0; // Initial rotation angle
        const img8 = document.getElementById('poza8');

        img8.addEventListener('click', function() {
            angle8 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle8}deg)')
            this.style.transform = `rotate(${angle8}deg)`; // Apply the rotation
        });


        let angle9 = 0; // Initial rotation angle
        const img9 = document.getElementById('poza9');

        img9.addEventListener('click', function() {
            angle9 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle9}deg)')
            this.style.transform = `rotate(${angle9}deg)`; // Apply the rotation
        });


        let angle10 = 0; // Initial rotation angle
        const img10 = document.getElementById('poza10');

        img10.addEventListener('click', function() {
            angle10 += 90; // Increase the angle by 90 degrees
            console.log('rotate(${angle10}deg)')
            this.style.transform = `rotate(${angle10}deg)`; // Apply the rotation
        });

        



        



