# Contacts Application
## How to Build?

### Clone the project
You can clone this project via SmartGit, SourceTree or another tools to work with Git.<br>
If You are using `git` as terminal tool, You can do next:<br>
`git clone <repository> <optional:folder-to-copy-into>`


### Installing Dependencies
To install project dependencies You need to run:<br>
`npm install` from the root of the project

### Test Build
There are few options, how to get it running:
- **Emulator** -- `tns run android --emulator` (Need to have installed at least [Genymotion](https://www.genymotion.com/fun-zone/), [Andy](https://www.andyroid.net/) or [Bluestacks](https://www.bluestacks.com/download.html)) to get it running on *Android*, or `tns run ios --emulator` for iOS (Need to have [Xcode](https://developer.apple.com/download/) downloaded and installed)
- **Android Device** -- Just connect Your *Android* device to the PC, switch **Developer Options** to enabled state (How to enable read [here](https://www.androidcentral.com/how-enable-developer-settings-android-42)), allow PC to conect Your device (as Trusted) and then allow *Install via USB* in the **Developer Options**. And then, from Your project directory just run `tns run android` and then application will be installed on Your device and refreshing, because of real-time sync.
- **iOS** (Works only with Mac OS X) -- Connect Your device then tap **Trust** on mobile and run from the terminal `tns run ios`.  Also, want to emphasis that also in this case You **must** have [Xcode](https://developer.apple.com/download/) installed.