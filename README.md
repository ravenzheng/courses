### How to Start
1. **Fork** the `courses` repo and clone it to your local machine.
2. **Fork** the actual course repo and clone that repo to your locla machine too.
3. After you clone the repositories, it's recommended you have the following folder structure on local machine.
  ```
  parent_folder
  |---courses
  |---phys208a
  |---calculus
  ```
4. Install dependencis in `courses`
  ```
  cd courses
  npm install
  ```
5. Install dependencies in `phys208a`. It dependends on `courses`
  ```
  cd phys208a
  npm link ../courses
  ```
6. You are ready to roll.

### TODO
1. Add "Edit" link on page to navigate to source markdown file page on github.
2. Implement yaml header feature.
3. Add google analysis key to track page traffic.
4. Add "next" and "previous" link on note page.
