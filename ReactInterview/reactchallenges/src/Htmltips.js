function HTMLtips() {
  return (
    <>
      {/*To add a tooltip we should provide a value to the title attraibute*/}
      <p title="This is a tooltip">What is this</p>
      {/*To edit content in the browser add contentEditable=true*/}
      <p contentEditable="true">Editable Content</p>
      {/*To add a download provide the link in href of an anchortag and add download attribute*/}
      <a href="#testing" download>
        Resume
      </a>
    </>
  );
}
export default HTMLtips;
/**
 * how to make different sizes images to same width and height (use aspect-ratio):
 *.photos{
  aspect-ratio:3/2;
  object-fit:contain; //this helps us not to stretch the image.
  mix-blend-mode: color-burn //this helps us remove the unwanted background i.e. if the logos have white background and we don't want that background then use this
 }
 * 
 * 
 */
/**
 * if we want to edit html styles in the browser it self then add style attribute to the style tage in the html and contentEditable
 * Now we can edit the code styking in the bowser itself
 * <style style="display:block; white-space:pre;" contentEditable >
 * html{
 * background-color:red
 * }
 * </style>
 */
