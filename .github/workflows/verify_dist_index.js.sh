if [[ "$(git status --porcelain)" != "" ]]; then
  git status

  echo "::error::Unstaged changes detected."
fi
