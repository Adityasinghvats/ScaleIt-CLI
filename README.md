# ScaleIt-CLI
- Try out
- Create a folder user
```sh
mkdir Scaleit
cd Scaleit
```
- Clone the repo
```sh
git clone https://github.com/Adityasinghvats/ScaleIt-CLI.git
```
- Now enter the command
```sh
cd cli-image
```
- Install packages using
```sh
npm install
```
- Bring all your images to the `/test` folder and then run the command.
```sh
image i="test\" w 100 q 80
```
- `i` tag gives tha source file.
- `w` is for giving user defined width.
- `q` is for giving user defined quality.
- On running the command all the files in the test folder will be resized and optimised and images will be saved in their original location.
- Project uses `resize-optimise-image` package which is built on top of `Jimp`.
