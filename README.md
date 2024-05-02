# Avatar-Exercise

An exercise completed using ReactJS. The tasks included in the exercise are:

## Description
Users upload a badge: an avatar within a circle. Create a function taking a png as input and verify that:
  1. Size = 512x512
  2. The only non transparent pixels are within a circle
  3. That the colors is the badge give a "happy" feeling
  4. Additionally, you can create a parallel function that converts the given image (of any format) into the specified object.

A brief description of how these tasks were solved:
  1. Simply check the height and width of the uploaded image
  2. The pixel color values for each pixel in the image are stored in an array. For every pixel, if the pixel is outside the circle and the rgba value has a non-zero alpha (transparency), it is an invalid image. To check if       the position is inside the circle, the distance from the pixel to the center of the Avatar circle is checked, if it is greater than 256, the pixel is outside the circle.
  3. A color palette is selected (from https://coolors.co/palettes/trending/happy) and using that, a list of colors that give a "happy" feeling is generated. If more than 60% of the pixels in the avatar have a color value         similar to a color included in the list, then the avatar is said to give a "happy" feeling
  4. In another branch on the repository called autoconv, the image is automatically converted into the required format. If the image is bigger than 512x512, then the central 512x512 portion of the image is included. If           pixels outside the circle are non-transparent, they are changed to be transparent.

## How to run
Clone the repository and choose the branch/version to run. (Using git, this can be done with `git switch autoconv` and `git switch main`).
Run `npm install` and `npm start` to run the local server and test the page.

### Demo videos included
