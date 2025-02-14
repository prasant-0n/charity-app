'use client';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';

// import React, { useEffect, useState } from 'react';
// import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex flex-col px-72 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Spreading Smiles, Changing Lives
        </h2>
        <p className="mt-3.5 text-lg leading-7 text-neutral-600 max-md:max-w-full">
          ForHelp is a passionate team of individuals dedicated to transforming
          the lives of children in need. We believe that every child deserves a
          chance to thrive, and with love, care, and quality support, we strive
          to make a positive impact on their lives.
        </p>
      </div>{' '}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="text-black"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
    src: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJLifwrLKrlhB2bxgtGZZIRv4pXBCi0O8ag&s',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    src: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    src: 'https://media.istockphoto.com/id/1199617885/photo/good-looking-young-indian-man.jpg?s=612x612&w=0&k=20&c=u38NgB-q0E98PKGHi7siSr-Uhdua3ActSZyYDgCPtL4=',
  },
];
