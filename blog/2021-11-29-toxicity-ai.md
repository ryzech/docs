---
slug: 2021-11-29-toxicity-ai
title: Toxicity AI Detection Plugin
authors: [ryzechdev, derpylove_11, legundo, ecr0708]
tags: [minecraft, smp, plugins, python, ai, programming]
---
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


![Chat Toxicity](../static/img/ai.jpg)

## Python Toxicity Model Chat Plugin!


### Python Model, how does it work? 
<Highlight color="#FFFF00">All credit for the model to BaldProgammer, he trained it, and setup the original API server</Highlight>

The model is based off of Bert's Distil models! Can't say much about ours, since we aren't open-sourcing the model part of this. But you can see the official model [here](https://huggingface.co/unitary/toxic-bert)!

### Chat Plugin, how the model interacts with the chat.