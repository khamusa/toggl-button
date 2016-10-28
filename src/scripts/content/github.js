/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#partial-discussion-header:not(.toggl)', {observe: true}, function (elem) {
  var link, description,
    numElem = $('.gh-header-number', elem),
    titleElem = $('.js-issue-title', elem),
    projectElem = $('h1.public strong a, h1.private strong a');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'github',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  console.log('trying to attach it')
  $('.TableObject-item--primary').appendChild(link);
});
