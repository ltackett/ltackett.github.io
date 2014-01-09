def calendar_badge date
  if date.respond_to? 'strftime'  # This is a date object. Do date-y things.
    content_tag :span, date.strftime('%-d'),
                title: date.strftime('%-m/%-d/%Y'),
                class: "calendar-badge #{date.strftime('%b').downcase}"

  else                            # Not a date object. Assume it's a string.
    content_tag :span, date,
                class: 'calendar-badge no-month'
  end
end