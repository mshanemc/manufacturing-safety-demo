There's a local nodejs app...which has its own README.  You should.  That runs the lightbulb stuff.

The org is slightly modified from the EinsteinVision repo, doing some nifty platform event streaming.

I've trained a hardhat model--you'd have to make your own if you don't have access to the org.

Model names should be NoHardHat and HasHardHat.  I may, in a moment of laziness, hardcoded the model ID.  Adjust accordingly in apex.

Einstein's setup has changed a bit--you may have to redo the auth stuff if you create an account today vs. when this was done.  It's a tiny modification.

===

My model is great at training "everyone in the pic is wearing a hard hat" vs. "at least one person in the pic isn't wearing a hard hat".

The gap is the scenario where nobody is in the picture.  You're encouraged to train a model with some photos with no people and a label for that.  It's up to your whether that should be green, red, or maybe just white.  Or maybe leave it the way you saw it last.