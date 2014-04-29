---
layout:     post
title:      "Removing sensitive data from a git repository"
date:       2014-04-28 22:27:34
categories: git
---

Christ on a cracker, did I really just commit db/database.sqlite on this rails app and push? Shitballs.

Don't worry. Git's got your back. You can permanently yank a file from your repo with ease thanks to a [handy guide on github.com](https://help.github.com/articles/remove-sensitive-data).

Here's the commands without all the caveats:

    git filter-branch --force --index-filter \
    'git rm --cached --ignore-unmatch path/to/file_to_be_removed' \
    --prune-empty --tag-name-filter cat -- --all

    git push origin master --force

    git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
    git reflog expire --expire=now --all
    git gc --prune=now

Super cool. I just did this and it went great. Be sure to read the github article to understand what's going on line-by-line. I don't recommend doing this without knowing the inherent risks of rewriting the commit history.