import happy from './happy.jpg';

export const tutorialData = [
    {
        title: 'Welcome to Doggie Dashboard',
        text: 'Keep the doggie happy and she\'ll be the goodest girl!',
        additionalElements: [
            {
                type: 'img',
                src: happy,
                alt: 'happy dog'
            },
            {
                type: 'button',
                text: 'Skip tutorial',
                click: () => {
                    console.log('skip');
                }
            }
        ]
    },
    {
        title: 'Tutorial - Feed and Water Doggie',
        text: 'Click "Feed" and "Water" to make sure doggie has what she needs to keep her tummy full. Be careful! Those nom noms disappear faster than you think!',
        additionalElements: []
    },
    {
        title: 'Tutorial - Scratch Doggie\'s Ears',
        text: 'Doggie really likes her ears scratched. She gets happy when you do it, but as soon as you stop she gets sad quickly.\nTo scratch, while the mouse button is depressed, move your cursor over doggie\'s ear.',
        additionalElements: [
            {
                type: 'button',
                text: 'Play Doggie Dashboard!',
                click: () => {
                    console.log('play!');
                }
            }
        ]
    }
];