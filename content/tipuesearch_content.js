var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://g8people.github.io/wcm2024/ \n 網誌: https://g8people.github.io/wcm2024/blog\xa0 \n 簡報:\xa0 https://g8people.github.io/wcm2024/reveal \xa0 \n 倉儲: https://github.com/G8People/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'homework', 'text': '', 'tags': '', 'url': 'homework.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'question1', 'text': '(1) \n \n \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n \n \n A: \n 要在 Windows 上演示 Git 客户端与 Git 服务器，你可以按照以下步骤进行： \n **设置 Git 服务器：** \n 1. **安装 Git：**首先，在你选择的 Windows 服务器上安装 Git。你可以从 Git 官方网站（https://git-scm.com/）下载并安装 Git for Windows。 \n 2. **设置 Git 仓库：**选择一个目录作为 Git 仓库，并通过命令行进入该目录。 \n 3. **初始化仓库：**使用以下命令初始化 Git 仓库： \n ```  git init --bare  ``` \n 这将在选定目录中创建一个裸仓库，用于作为 Git 服务器。 \n 4. **设置 SSH 访问（可选）：**如果你计划使用 SSH 进行访问和认证，你需要确保在服务器上配置了 SSH 服务，并在客户端生成 SSH 密钥对并将公钥添加到服务器上的授权文件中。 \n **设置 Git 客户端：** \n 1. **安装 Git：**在你选择的 Windows 客户端上安装 Git for Windows，同样可以从 Git 官方网站下载并安装。 \n 2. **配置全局用户信息：**在命令行或 Git Bash 中，使用以下命令配置全局用户信息： \n ```  git config --global user.name "Your Name"  git config --global user.email "your.email@example.com"  ``` \n 这将设置全局的用户名和邮箱，用于在提交时标识作者信息。 \n 3. **克隆仓库：**在你选择的目录中，使用以下命令克隆 Git 服务器上的仓库： \n ```  git clone username@server_ip:/path/to/repository  ``` \n 其中 `username` 是 Git 服务器的用户名，`server_ip` 是服务器的 IP 地址，`/path/to/repository` 是服务器上仓库的路径。 \n 4. **进行更改：**在克隆的本地仓库中进行更改，并使用以下命令提交更改： \n ```  git add .  git commit -m "Commit message"  ``` \n 5. **推送更改：**将本地更改推送到 Git 服务器： \n ```  git push origin master  ``` \n 这将把本地的 `master` 分支推送到远程仓库。 \n 通过以上步骤，你就可以在 Windows 上演示 Git 客户端与 Git 服务器的基本使用。记得根据实际情况进行配置和调整，例如使用 HTTPS 或 SSH 访问，以及确保适当的权限和认证方式。 \n (2) \n git創作人的相關履歷? \n A: \n 当谈到创作人的履历时，特别是那些与软件开发、写作、设计等相关的创作人，他们在履历中可能会突出以下方面与 Git 相关的内容： \n 1. **版本控制经验**：在履历中强调对版本控制系统（如 Git）的熟练掌握，包括对分支管理、合并冲突解决、提交历史管理等方面的经验。这展示了创作人对于有效管理和追踪作品变更历史的能力。 \n 2. **项目协作经历**：描述在团队中使用 Git 进行协作的经验。这可以包括与团队成员合作解决问题、审核代码或文档、参与项目管理等方面的经历。突出自己在团队中的贡献，以及如何利用 Git 实现高效的团队协作。 \n 3. **个人项目管理**：展示如何利用 Git 管理个人项目的经验。包括如何组织文件结构、使用分支管理不同功能或版本、定期进行提交和推送等。这表明创作人具备独立开展项目工作并有效管理项目的能力。 \n 4. **技能和工具**：在技能部分提及熟练掌握 Git 及相关工具的经验，如 GitHub、GitLab 等。这表明创作人具备利用现代工具和技术提高工作效率和质量的能力。 \n 5. **开源贡献**：如果有的话，可以提及自己在开源项目中的贡献经历。这可能包括提交代码、修复错误、撰写文档等，展示了创作人对于开源社区的积极参与和贡献精神。 \n 综上所述，创作人的履历中可以通过突出与 Git 相关的经验和技能，展示自己在版本控制、团队协作和项目管理方面的能力，从而提升自己在相关领域的竞争力和可信度。 \n (3) \n 如何用git解決softlatheV5的問題? \n A: \n 要使用 Git 解决 SoftLatheV5（假设这是一个软件项目）的问题，可以遵循以下步骤： \n 1. **创建 Git 仓库**：首先，在项目目录中初始化一个 Git 仓库。可以使用以下命令： \n ```  git init  ``` \n 2. **添加文件**：将 SoftLatheV5 项目的文件添加到 Git 仓库中，可以使用以下命令： \n ```  git add .  ``` \n 这将添加所有文件到暂存区。 \n 3. **提交更改**：一旦添加了文件，就可以将它们提交到仓库中，可以使用以下命令： \n ```  git commit -m "Initial commit"  ``` \n 这将提交更改并创建一个初始提交。 \n 4. **分支管理**：如果 SoftLatheV5 有多个功能或修复要进行，可以使用分支进行管理。可以使用以下命令创建新分支： \n ```  git checkout -b new-feature  ``` \n 在新分支上进行开发，完成后再合并回主分支。 \n 5. **远程仓库**：如果需要与团队协作或备份代码，可以将本地仓库连接到远程仓库，例如 GitHub、GitLab 或 Bitbucket。可以使用以下命令添加远程仓库： \n ```  git remote add origin <remote_repository_URL>  ``` \n 然后将本地更改推送到远程仓库： \n ```  git push -u origin master  ``` \n 6. **解决冲突**：如果多人同时修改了同一部分代码，可能会发生冲突。在这种情况下，需要解决冲突并合并更改。可以使用 Git 提供的合并工具或手动编辑文件来解决冲突。 \n 7. **版本控制**：使用 Git 可以轻松地回滚到之前的版本，如果某个版本出现问题，可以使用以下命令回滚： \n ```  git reset --hard <commit_SHA>  ``` \n 其中 `<commit_SHA>` 是要回滚到的提交的哈希值。 \n 通过以上步骤，你可以使用 Git 来管理 SoftLatheV5 项目，并且更加高效地进行开发、协作和问题解决。 \n', 'tags': '', 'url': 'question1.html'}, {'title': 'question2', 'text': '(1) \n \n \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n \n \n A: \n 要在 Windows 上演示 Git 客户端与 Git 服务器，你可以按照以下步骤进行： **设置 Git 服务器：** 1. **安装 Git：**首先，在你选择的 Windows 服务器上安装 Git。你可以从 Git 官方网站（https://git-scm.com/）下载并安装 Git for Windows。 2. **设置 Git 仓库：**选择一个目录作为 Git 仓库，并通过命令行进入该目录。 3. **初始化仓库：**使用以下命令初始化 Git 仓库：  ```  git init --bare  ```  这将在选定目录中创建一个裸仓库，用于作为 Git 服务器。 4. **设置 SSH 访问（可选）：**如果你计划使用 SSH 进行访问和认证，你需要确保在服务器上配置了 SSH 服务，并在客户端生成 SSH 密钥对并将公钥添加到服务器上的授权文件中。 **设置 Git 客户端：** 1. **安装 Git：**在你选择的 Windows 客户端上安装 Git for Windows，同样可以从 Git 官方网站下载并安装。 2. **配置全局用户信息：**在命令行或 Git Bash 中，使用以下命令配置全局用户信息：  ```  git config --global user.name "Your Name"  git config --global user.email "your.email@example.com"  ```  这将设置全局的用户名和邮箱，用于在提交时标识作者信息。 3. **克隆仓库：**在你选择的目录中，使用以下命令克隆 Git 服务器上的仓库：  ```  git clone username@server_ip:/path/to/repository  ```  其中 `username` 是 Git 服务器的用户名，`server_ip` 是服务器的 IP 地址，`/path/to/repository` 是服务器上仓库的路径。 4. **进行更改：**在克隆的本地仓库中进行更改，并使用以下命令提交更改：  ```  git add .  git commit -m "Commit message"  ``` 5. **推送更改：**将本地更改推送到 Git 服务器：  ```  git push origin master  ```  这将把本地的 `master` 分支推送到远程仓库。 通过以上步骤，你就可以在 Windows 上演示 Git 客户端与 Git 服务器的基本使用。记得根据实际情况进行配置和调整，例如使用 HTTPS 或 SSH 访问，以及确保适当的权限和认证方式。 \n \n', 'tags': '', 'url': 'question2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};