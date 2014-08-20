# Utility function for searching by a word.
hasWordInString = (word) -> @indexOf(word) isnt -1

# Function for filtering items by an array of words
window.filterItems = ($el) ->
  words  = $el.val().toLowerCase()
  $items = $("[data-element=item]")

  # Split `text` to a space-delimited array.
  # We will search by this array later.
  words = words.split(" ")

  # Hide all items on event.
  $items.attr('data-filtered', false)

  # Is the first item of `text` a non-empty string?
  # Cool. Filter the items and show them.
  if words[0].length > 0

    # Iterate through the array of words.
    # If any of those words are found in
    # the `itemText`, this will return `true`.
    # This tells the filter that this item
    # matches the search, which then shows it.
    $items = $items.filter ->
      item = $(this)
      return words.every(hasWordInString, item.text().toLowerCase())
      return

    # Show filtered items
    $items.attr('data-filtered', 'true')

  # Text input is empty? Show all items.
  else $items.removeAttr('data-filtered')

  return


# Bind actions to event handlers
$("[data-action]").each ->
  $el    = $(@)
  action = $el.data('action')

  if action == 'text-search' then $el.on 'keyup', (event) -> filterItems($el)
