# The Groupme Trump Insult Generator


## About

This bot was inspired by the Trump insult generator from Time. You can try it out [here](http://time.com/3966291/donald-trump-insult-generator/) and [here](http://www.storybench.org/mother-jones-built-donald-trump-insult-generator/) is an article where [Ben Breedlove](https://twitter.com/bdbreedlove) explains how Mother Jones and Time built it.

## How to use it

To use this bot on Groupme, just tell Trump who to offend by starting a message in the group with the prefix `/trump`, followed by your victim's name.

Here's an example:

![Trump attacks Nick]
(https://pbs.twimg.com/media/CgIYbN7WEAAd0LZ.jpg)

## How to install it

For the easiest way to set this bot up in your own Groupme conversation, you will need:

- A Heroku account
- A Github account
- A Groupme account that is a member of the group you want to add the bot to.


---

First, go on the [Groupme Developer](http://dev.groupme.com/bots) website and login with your regular Groupme account login credentials.

Now hit the orange `Create Bot` button, and select what what group it will live in, the name for the bot and an avatar picture. I personally chose Trump's own Twitter profile picture. Here's the link for that one.

`https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2.jpg`

You can leave `Callback URL` blank for now.

Hit sumbit, you'll be sent back to the first page where your bot should be listed. Notice that a `Bot ID` has been generated. If you click on your new bot, you should be taken to a page where you can copy that ID. We'll be using that later.

-----
Now the Github part.

Unfortunately Heroku won't let us use someone else's code to deploy apps (at least not without using some command line code and I'm trying to stay away from that here).

So once you're signed into Github, go to [this repo's page](https://github.com/phrmsilva/groupme-trump-insult-generator) and on the top right corner, click `Fork`. Once you fork this repo, you should have your own copy.

Downside is that you won't be able to get any of the later improvements or changes to this bot but this is just a simple app and as of the time of this writing, it should work fine.

---

Now  on to the Heroku side of things.
Once you login to your account, hit the `+` button on the upper right side and create a new app.

On the new app's settings, set an app name (or not and let Heroku generate one for you). Remember the app name as we will need it later. You can leave the region as United States, and go ahead and create your app.

Now you should be on your app's homepage under the `Deploy` tab. If not, navigate to it. Notice under `Deployment method` there is a `Github` option. Select that, connect to Github, and allow Heroku to access your Github.

Now your github account should up under `Search a repository to connect to`. Type in "trump" and should see the `groupme-trump-insult-generator` option. Connect to that one.

Now go back to the top, and select the `Settings` tab. Now we'll need to set up out bot's ID. Under `Config Variables`, click on `Reveal Config Vars`. In a new option, set `KEY` to `BOT_ID` and `VALUE` to your bot's id from the Groupme bot page. Finally, hit `Add`.

Scroll down a bit and you'll see the `Domains section`. Copy the link under `Heroku Domain`, it should be something like `http://your-app-name-here.heroku.com`. That will be our Groupme's bot callback URL.

----

Back at the Groupme developer page, click `Edit` for the bot you created for this generator. Paste your Heroku app's URL for the `Callback URL` and hit `Submit`.

Back at the Heroku app, select the `Deploy` tab, scroll all the way down and click on `Deploy Branch`.

Boom, your bot should be working. Feel free to try it out on your Groupme and have fun.

## Improving this

Feel free to send in Pull Requests or to e-mail me at `phrmsilva@gmail.com` to fix any bugs in the code or suggest improvements for the instructions. I haven't tried the guide myself, as I typed most of it from memory. 

I'll try to keep an updated list here of the known issues.

- For some strategies, the spaces before and after commas are inconsistent.


### Disclaimer
I am not an American voter and will no be supporting any of the major candidates in the upcoming election. I am not affiliated with any party and this is not meant to suggest any offense to Trump. This rather an exercise of software developmet and linguistics.
