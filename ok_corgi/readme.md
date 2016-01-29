# OkCorgi

**Groups of 2-3**

## Overview

Today we're going to be building a disruptive technology that will make the world a better place - a dating site for dogs. It's called OkCorgi.

## How it Works

OkCorgi functions similarly to Tinder, but with [adorable dog photos](https://www.google.com/search?q=corgi+pictures&espv=2&biw=1260&bih=652&source=lnms&tbm=isch&sa=X&ei=s2iNVYHxJIzooATZ-6qQBA&ved=0CAYQ_AUoAQ#tbm=isch&q=corgnelius+and+stumphrey&imgrc=_) instead of 20-somethings and their questionable motives. 

- When you load up the app, a picture of a dog should show up, along with its name and age (and any other info you think is relevant).
- The user can then click on buttons to "paw left" (to decline) or "paw right" (to like) an individual dog. The "paw left" and "paw right" functions can be implemented clicking on 2 different buttons (meaning the photos don't actually have to be draggable).
- Once the user either "paws left" or "paws right", the next dog's photo and profile info is displayed and you can start over.
- There should be a page to show which dogs a user has already "liked". This list should include the dog's name and a profile picture.

## Technology

OkCorgi is a **web app** powered by a **Node server** and a **Mongo database**. Since we don't yet know how to implement user authentication with Node, we'll assume that all of the users on our site share 1 "account" through which they can like dogs.

## Rules
- When someone "paws left" or "paws right", that data should be saved in a Mongo database so the data is persisted.
- Users should be able to see which dogs have already been "liked".

## Tips
- Work on small pieces of functionality at a time, as always. MVP!!
- PSEUDOCODE

## BONUS
- Allow the user to "paginate" their list of "liked" dogs to see 10 at a time every time they click "more dogs". If the user doesn't have 10 more "liked" dogs, than there should be a message saying so.
- Instead of clicking on a button to "paw left" or "paw right", allow the user to drag the dog's photo to left or right of the page to indicate their preference.
- Allow users to "unlike" a dog once it's been liked.
