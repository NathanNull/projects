npm run build

cd build

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:NathanNull/projects.git main:gh-pages

cd ..

echo "It'll take a couple minutes for the website to upload. Take a break."