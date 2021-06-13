'use strict';

document.addEventListener('DOMContentLoaded', function () {

    function playSound(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        console.log(key);
        if (!audio) return;

        audio.currentTime = 0; //resets each sound so you can continue to play the sound each time
        audio.play(); // plays each time the key is hit

        key.classList.add('playing');
    }

    function removeTransition(event) {
        if (event.propertyName !== 'transform') return;
        this.classList.remove('playing'); // removes the playing class each time 
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', playSound);

    // Mobile / Click Audio capabilities:

    document.getElementById('alien').addEventListener('click', function () {
        const alien = document.querySelector('#alienSound');
        const alienKey = document.querySelector('.key[data-key="68"]')
        alien.currentTime = 0;
        alienKey.classList.add('playing');
        alien.play();
    })

    document.getElementById('heyBoss').addEventListener('click', function () {
        const heyBoss = document.querySelector('#heyBossSound');
        const bossKey = document.querySelector('.key[data-key="70"]')
        heyBoss.currentTime = 0;
        bossKey.classList.add('playing');
        heyBoss.play();
    })

    document.getElementById('nyyes').addEventListener('click', function () {
        const nyyes = document.querySelector('#nyyesSound');
        const nyyesKey = document.querySelector('.key[data-key="71"]')
        nyyes.currentTime = 0;
        nyyesKey.classList.add('playing');
        nyyes.play();
    })

    document.getElementById('ravioli').addEventListener('click', function () {
        const ravioli = document.querySelector('#ravioliSound');
        const ravioliKey = document.querySelector('.key[data-key="72"]')
        ravioli.currentTime = 0;
        ravioliKey.classList.add('playing');
        ravioli.play();
    })

    document.getElementById('spaghetti').addEventListener('click', function () {
        const spaghetti = document.querySelector('#spaghettiSound');
        const spaghettiKey = document.querySelector('.key[data-key="74"]')
        spaghetti.currentTime = 0;
        spaghettiKey.classList.add('playing');
        spaghetti.play();
    })





})