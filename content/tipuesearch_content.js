var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://g8people.github.io/wcm2024/ \n 網誌: https://g8people.github.io/wcm2024/blog\xa0 \n 簡報:\xa0 https://g8people.github.io/wcm2024/reveal \xa0 \n 倉儲: https://github.com/G8People/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'homework', 'text': '', 'tags': '', 'url': 'homework.html'}, {'title': 'W2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護。 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 https://ren911308.github.io/wcm2024/content/index.htm \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': '１.ＷＩＮＫ', 'text': 'https://www.debugmode.com/wink.html \n', 'tags': '', 'url': '１.ＷＩＮＫ.html'}, {'title': '２.ＧＩＴ\u3000ＯＲＤＥＲ', 'text': 'git add . \xa0 (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git\xa0 push\xa0(推送) \n git version\xa0(查詢目前所使用的 git 版本) \n git status\xa0(一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add\xa0倉儲網址子目錄 \n git clone --recurse-submodules\xa0(.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': '２.ＧＩＴ\u3000ＯＲＤＥＲ.html'}, {'title': '３.建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n \n', 'tags': '', 'url': '３.建立分組倉儲.html'}, {'title': 'W4', 'text': '有關建立網站: 網站指的是 Web site針對網頁瀏覽器檢視的內容加以管理，利用 Github 所提供的 Pages 功能來建立網頁進行管理。 \n Replit靜態網站檢視:若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵，\xa0Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視。 \n Replit建立分組倉儲權限: \n 分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為: \n Host github.com\nUser git\nHostname github.com \n \n ssh.py 程式內容如下: \n \n \n \n import os\nif not os.path.exists("/home/runner/.ssh"): \n    os.makedirs("/home/runner/.ssh") \nos.system("mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa")\nos.system("mv ./downloads/config.txt /home/runner/.ssh/config")\nos.system("chmod og-rwx /home/runner/.ssh/id_rsa")\n \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '以 iframe 嵌入先前的教學影片做課前預習 \n 1.在Replit 平台上的分組倉儲權限設定 \n 2.Putty Solvespace STL 零件檢視方法 \n 3.大規模人工智慧運算的時代：前景、影響及回應 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'question1', 'text': '(1) \n \n \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n \n \n A: \n 要在 Windows 上演示 Git 客户端与 Git 服务器，你可以按照以下步骤进行： \n **设置 Git 服务器：** \n 1. **安装 Git：**首先，在你选择的 Windows 服务器上安装 Git。你可以从 Git 官方网站（https://git-scm.com/）下载并安装 Git for Windows。 \n 2. **设置 Git 仓库：**选择一个目录作为 Git 仓库，并通过命令行进入该目录。 \n 3. **初始化仓库：**使用以下命令初始化 Git 仓库： \n ```  git init --bare  ``` \n 这将在选定目录中创建一个裸仓库，用于作为 Git 服务器。 \n 4. **设置 SSH 访问（可选）：**如果你计划使用 SSH 进行访问和认证，你需要确保在服务器上配置了 SSH 服务，并在客户端生成 SSH 密钥对并将公钥添加到服务器上的授权文件中。 \n **设置 Git 客户端：** \n 1. **安装 Git：**在你选择的 Windows 客户端上安装 Git for Windows，同样可以从 Git 官方网站下载并安装。 \n 2. **配置全局用户信息：**在命令行或 Git Bash 中，使用以下命令配置全局用户信息： \n ```  git config --global user.name "Your Name"  git config --global user.email "your.email@example.com"  ``` \n 这将设置全局的用户名和邮箱，用于在提交时标识作者信息。 \n 3. **克隆仓库：**在你选择的目录中，使用以下命令克隆 Git 服务器上的仓库： \n ```  git clone username@server_ip:/path/to/repository  ``` \n 其中 `username` 是 Git 服务器的用户名，`server_ip` 是服务器的 IP 地址，`/path/to/repository` 是服务器上仓库的路径。 \n 4. **进行更改：**在克隆的本地仓库中进行更改，并使用以下命令提交更改： \n ```  git add .  git commit -m "Commit message"  ``` \n 5. **推送更改：**将本地更改推送到 Git 服务器： \n ```  git push origin master  ``` \n 这将把本地的 `master` 分支推送到远程仓库。 \n 通过以上步骤，你就可以在 Windows 上演示 Git 客户端与 Git 服务器的基本使用。记得根据实际情况进行配置和调整，例如使用 HTTPS 或 SSH 访问，以及确保适当的权限和认证方式。 \n (2) \n git創作人的相關履歷? \n A: \n 当谈到创作人的履历时，特别是那些与软件开发、写作、设计等相关的创作人，他们在履历中可能会突出以下方面与 Git 相关的内容： \n 1. **版本控制经验**：在履历中强调对版本控制系统（如 Git）的熟练掌握，包括对分支管理、合并冲突解决、提交历史管理等方面的经验。这展示了创作人对于有效管理和追踪作品变更历史的能力。 \n 2. **项目协作经历**：描述在团队中使用 Git 进行协作的经验。这可以包括与团队成员合作解决问题、审核代码或文档、参与项目管理等方面的经历。突出自己在团队中的贡献，以及如何利用 Git 实现高效的团队协作。 \n 3. **个人项目管理**：展示如何利用 Git 管理个人项目的经验。包括如何组织文件结构、使用分支管理不同功能或版本、定期进行提交和推送等。这表明创作人具备独立开展项目工作并有效管理项目的能力。 \n 4. **技能和工具**：在技能部分提及熟练掌握 Git 及相关工具的经验，如 GitHub、GitLab 等。这表明创作人具备利用现代工具和技术提高工作效率和质量的能力。 \n 5. **开源贡献**：如果有的话，可以提及自己在开源项目中的贡献经历。这可能包括提交代码、修复错误、撰写文档等，展示了创作人对于开源社区的积极参与和贡献精神。 \n 综上所述，创作人的履历中可以通过突出与 Git 相关的经验和技能，展示自己在版本控制、团队协作和项目管理方面的能力，从而提升自己在相关领域的竞争力和可信度。 \n (3) \n 如何用git解決softlatheV5的問題? \n A: \n 要使用 Git 解决 SoftLatheV5（假设这是一个软件项目）的问题，可以遵循以下步骤： \n 1. **创建 Git 仓库**：首先，在项目目录中初始化一个 Git 仓库。可以使用以下命令： \n ```  git init  ``` \n 2. **添加文件**：将 SoftLatheV5 项目的文件添加到 Git 仓库中，可以使用以下命令： \n ```  git add .  ``` \n 这将添加所有文件到暂存区。 \n 3. **提交更改**：一旦添加了文件，就可以将它们提交到仓库中，可以使用以下命令： \n ```  git commit -m "Initial commit"  ``` \n 这将提交更改并创建一个初始提交。 \n 4. **分支管理**：如果 SoftLatheV5 有多个功能或修复要进行，可以使用分支进行管理。可以使用以下命令创建新分支： \n ```  git checkout -b new-feature  ``` \n 在新分支上进行开发，完成后再合并回主分支。 \n 5. **远程仓库**：如果需要与团队协作或备份代码，可以将本地仓库连接到远程仓库，例如 GitHub、GitLab 或 Bitbucket。可以使用以下命令添加远程仓库： \n ```  git remote add origin <remote_repository_URL>  ``` \n 然后将本地更改推送到远程仓库： \n ```  git push -u origin master  ``` \n 6. **解决冲突**：如果多人同时修改了同一部分代码，可能会发生冲突。在这种情况下，需要解决冲突并合并更改。可以使用 Git 提供的合并工具或手动编辑文件来解决冲突。 \n 7. **版本控制**：使用 Git 可以轻松地回滚到之前的版本，如果某个版本出现问题，可以使用以下命令回滚： \n ```  git reset --hard <commit_SHA>  ``` \n 其中 `<commit_SHA>` 是要回滚到的提交的哈希值。 \n 通过以上步骤，你可以使用 Git 来管理 SoftLatheV5 项目，并且更加高效地进行开发、协作和问题解决。 \n', 'tags': '', 'url': 'question1.html'}, {'title': 'question2', 'text': '(1) \n \n \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n \n \n A: \n 要在 Windows 上演示 Git 客户端与 Git 服务器，你可以按照以下步骤进行： **设置 Git 服务器：** 1. **安装 Git：**首先，在你选择的 Windows 服务器上安装 Git。你可以从 Git 官方网站（https://git-scm.com/）下载并安装 Git for Windows。 2. **设置 Git 仓库：**选择一个目录作为 Git 仓库，并通过命令行进入该目录。 3. **初始化仓库：**使用以下命令初始化 Git 仓库：  ```  git init --bare  ```  这将在选定目录中创建一个裸仓库，用于作为 Git 服务器。 4. **设置 SSH 访问（可选）：**如果你计划使用 SSH 进行访问和认证，你需要确保在服务器上配置了 SSH 服务，并在客户端生成 SSH 密钥对并将公钥添加到服务器上的授权文件中。 **设置 Git 客户端：** 1. **安装 Git：**在你选择的 Windows 客户端上安装 Git for Windows，同样可以从 Git 官方网站下载并安装。 2. **配置全局用户信息：**在命令行或 Git Bash 中，使用以下命令配置全局用户信息：  ```  git config --global user.name "Your Name"  git config --global user.email "your.email@example.com"  ```  这将设置全局的用户名和邮箱，用于在提交时标识作者信息。 3. **克隆仓库：**在你选择的目录中，使用以下命令克隆 Git 服务器上的仓库：  ```  git clone username@server_ip:/path/to/repository  ```  其中 `username` 是 Git 服务器的用户名，`server_ip` 是服务器的 IP 地址，`/path/to/repository` 是服务器上仓库的路径。 4. **进行更改：**在克隆的本地仓库中进行更改，并使用以下命令提交更改：  ```  git add .  git commit -m "Commit message"  ``` 5. **推送更改：**将本地更改推送到 Git 服务器：  ```  git push origin master  ```  这将把本地的 `master` 分支推送到远程仓库。 通过以上步骤，你就可以在 Windows 上演示 Git 客户端与 Git 服务器的基本使用。记得根据实际情况进行配置和调整，例如使用 HTTPS 或 SSH 访问，以及确保适当的权限和认证方式。 \n', 'tags': '', 'url': 'question2.html'}, {'title': 'W7-W8', 'text': '期中成績登記，並輸入自己想要的理想分數。 \n 第八週上課內容 \n 1.了解教育的本質、意義 \n 2.如何把影片嵌入自己的個人網站上 \n', 'tags': '', 'url': 'W7-W8.html'}, {'title': 'W10', 'text': '在mdewcm2024/1astud-site新增各組的心得，並解決衝突的問題 \n 並使用超文件到網誌中 \n 介紹acp的功用 \n git add . \n git commit -m "$1" --author="$2" \n git push \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': "面 demo 在同一頁面下入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt 動態頁面超文件). \n practice_html.txt 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用 \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n \xa0 \n", 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '利用 wsgi_v2_py 擷取個學期的課表 \n 一年級上學期的課表 \n 將上方的連結下載後放入可攜，儲存後放入cmd \n 要先確認是否有flask和flask-cors \n 輸入 \n pip list \n 如果有就可執行下面內容 \n cd tmp \n python wsgi_v2.py \n 即可開啟班級課表 \n \n 112年第1學期課表 \n \n \n 112年第2學期課表 \n', 'tags': '', 'url': 'W13.html'}, {'title': '期中作業', 'text': '', 'tags': '', 'url': '期中作業.html'}, {'title': '網頁式內容管理', 'text': 'Q1:如何建立 Github 上的網站?Q2:如何管理內容?Q3: 如何建立章節式網站?Q4:能放入甚麼多媒體內容?Q5:靜態圖文?Q6:動態圖文?Q7:線上遊戲?Q8:3D 零組件展示?Q9:如何建立網頁系統中的網誌?Q10:如何建立網頁系統中的簡報? \n A1: \xa0GitHub 上建立網站可以使用 GitHub Pages ，先創立一個儲存庫，名稱為username.github.io，在存儲庫中創建一個名為「index.html」的 HTML 文件，用於構建你的網站主頁。將網站的代碼添加到 index.html 文件中，然後把它推到 GitHub 存儲庫。 \n A2: GitHub 上管理網站內容通常使用版本控制工具 Git。可以在本地創建一個 Git 存儲庫，將網站代碼下載到本地，然後在本地修改和更新網站內容。完成修改後，使用 Git 將更改推送到 GitHub 存儲庫。另外，可以使用分支（Branches）來開發新功能或進行實驗，然後將分支合併（Merge）到主分支（通常是 master 或 main）中。 \n A3:建立章節式網站可以使用靜態網站生成器，如Replit、Codespaces或Gitpods等。首先，需要選擇一個適合你需求的生成器，然後在本地開發環境中創建你的網站再使用生成器提供的模板和功能來創建不同的章節和內容頁面，組織你的網站內容。完成編輯後，使用生成器將網站生成為靜態文件，然後將這些文件推送到GitHub存儲庫中。最後，你的章節式網站將通過GitHub Pages或其他靜態網站托管服務進行部署，讓其他人可以訪問和瀏覽你的網站。 \n A4: \n 1.圖片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 2.影片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 3.音頻: 嵌入音樂或語音文件，如Podcast等，讓讀者可以聆聽音頻內容。 \n 4.地圖:嵌入地圖服務，如Google Maps，以展示地理位置或路線信息。 \n 5.表格:使用HTML或Markdown格式來創建和展示表格內容，以整理和呈現數據。 \n 6.圖表和圖形:使用JavaScript圖表庫或其他數據可視化工具來創建和展示圖表和圖形，以呈現數據和統計信息。 \n 7.放入網站:嵌入其他網站提供的媒體內容，如Twitter貼文、Instagram照片等，以擴展你的內容範圍。 \n A5: \n 1.圖片:將圖片文件直接插入到章節內容中。你可以使用HTML的\xa0 <img> \xa0標籤或Markdown的圖片語法（例如\xa0 ![圖片描述](圖片URL) ）來添加圖片。 \n 2.文本:使用Markdown或HTML來編寫文本內容，包括標題、段落、列表等。Markdown提供了簡單易讀的語法，而HTML則提供更多的自定義和控制。 \n 3.超連結:使用超連結來連接不同章節或其他網站。在HTML中，你可以使用\xa0 <a> \xa0標籤來創建超連結，而Markdown則提供了\xa0 [連結文字](連結URL) \xa0的語法。 \n 4.引用:引用其他資料或文字也是常見的做法。你可以使用Markdown的引用語法（ > 引用文字 ）或HTML的\xa0 <blockquote> \xa0標籤來添加引用內容。 \n A6: \n 1.動畫:使用CSS或JavaScript來創建和控制動畫效果，使圖片、文本或其他元素呈現動態效果。你可以使用CSS的\xa0 @keyframes \xa0樣式或JavaScript的動畫庫（如Animate.css）來添加動畫。 \n 2.交互式元素:加入JavaScript互動元素，例如按鈕、滑塊、表單等，讓用戶可以與你的網站互動。這些元素可以通過事件監聽器來實現動態效果，例如點擊按鈕後顯示或隱藏特定內容。 \n 3.即時更新:用JavaScript或AJAX來實現即時更新功能，例如在不刷新整個頁面的情況下加載新的內容或更新現有內容。這可以通過向後端API發送請求並處理返回的數據來實現。 \n 4.影片和音頻播放器:嵌入視頻和音頻播放器，讓用戶可以播放多媒體內容。你可以使用HTML5的\xa0 <video> \xa0和\xa0 <audio> \xa0標籤來添加視頻和音頻播放器，並使用JavaScript控制播放器的功能。 \n 5.即時更新圖表:使用JavaScript圖表庫（如Chart.js、D3.js等）來創建動態圖表，並實現即時更新功能，使圖表可以根據用戶操作或數據變化而動態更新。 \n A7: \n 1.使用嵌入式代碼:將線上遊戲的嵌入代碼（embed code）添加到你的網站中。許多線上遊戲提供了嵌入代碼，你只需將其添加到網站的HTML中的相應位置即可。 \n 2.使用iframe元素:使用HTML的\xa0 <iframe> \xa0元素來嵌入線上遊戲。你可以將遊戲的URL添加到\xa0 <iframe> \xa0元素的\xa0 src \xa0屬性中，然後將\xa0 <iframe> \xa0元素添加到你的網站中的任何位置。 \n 補充: <iframe> \xa0 元素是HTML中的一個標記，用於在網頁中嵌入另一個獨立的HTML文檔或外部網頁。它提供了一種在當前網頁中包含其他網頁內容的方法，讓你可以將其他網站的內容嵌入到網頁中，或者在同一網站中的不同頁面之間嵌入內容。 \n <iframe> \xa0 元素有一個 \xa0 src \xa0 屬性，用於指定要嵌入的外部文檔或網頁的URL。除此之外，還可以設置其他屬性來調整iframe的大小、邊框、樣式等。通過iframe，你可以在網頁中創建內嵌的互動元素，如Google地圖、YouTube視頻、線上遊戲等，為網站提供更豐富的內容和功能。 \n 3.設置遊戲頁面:在網站中創建一個專門的遊戲頁面，將遊戲嵌入到該頁面中。這樣做可以使遊戲與網站的其他內容分開，並為用戶提供更好的遊戲體驗。 \n 4.安全性:確保嵌入的遊戲代碼來源可信，以防止可能的安全風險。如果可能的話，最好使用來自可靠和信任的遊戲提供商的嵌入代碼。 \n A8: \n 1.使用Javascript 3D庫:使用像Three.js這樣的JavaScript 3D庫，可以輕鬆在網站中展示3D零組件。你可以將3D模型導入到你的網站中，並使用Three.js等庫來渲染和顯示它們。這樣的庫通常提供了各種功能，如照明、動畫、交互等，以增強3D模型的表現力。 \n 2.使用網頁GL視窗:利用WebGL技術，你可以在網頁中嵌入可交互的3D場景。這需要一些較高級的編程知識，但它可以讓你在網頁中直接渲染3D模型，使它們能夠與用戶互動。 \n 3.嵌入式3D查看器:使用嵌入式3D查看器，如Sketchfab，可以將3D模型嵌入到你的網站中。Sketchfab提供了一個簡單的嵌入代碼，你可以將它添加到你的網站中，以便在線上展示和互動3D模型。 \n A9:步驟 \n 1.選擇網誌平台 \n 2.設置網誌 \n 3.編輯內容 \n 4.發布文章 \n 5.促進網誌 \n 6.定期更新 \n A10:步驟 \n 1.選擇簡報工具 \n 2.建立簡報 \n 3.增加內容 \n 4.設置轉場效果 \n 5.編輯和分享 \n 6.儲存 \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'Python 程式系統', 'text': '學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬? \n \n \n \n', 'tags': '', 'url': 'Python 程式系統.html'}, {'title': '網頁上的 IDE', 'text': 'IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎? \n 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? \n', 'tags': '', 'url': '網頁上的 IDE.html'}, {'title': 'AI 工具', 'text': 'ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料? \n 學習議題: AI 工具曾經協助我們解決甚麼問題? \n', 'tags': '', 'url': 'AI 工具.html'}, {'title': '期末專案', 'text': '如何問 ChatGPT? \n 第一個問題Q:幫我用python做出五子棋的小遊戲並用網頁方式呈現，代碼要放在哪裡 \n \n 第二個問題Q:請問要建立那些文件和文件夾(並用Flask來處理後端) \n \n 第三個問題Q:幫我以網頁的方式發送192.168.0.122是我的位置 \n \n 後來就是處理問一些細節上的問題，例如按下空白建開始等等 \n \n \n \n', 'tags': '', 'url': '期末專案.html'}, {'title': '最終問出來的程式', 'text': '', 'tags': '', 'url': '最終問出來的程式.html'}, {'title': 'app.py', 'text': "from flask import Flask, render_template, jsonify, request\n\napp = Flask(__name__)\n\n# 初始化棋盘\nboard = [['' for _ in range(15)] for _ in range(15)]\ncurrent_player = 'X'\n\n@app.route('/')\ndef index():\n    return render_template('index.html')\n\n@app.route('/move', methods=['POST'])\ndef move():\n    global current_player\n    data = request.get_json()\n    x, y = data['x'], data['y']\n    if board[x][y] == '':\n        board[x][y] = current_player\n        winner = check_winner(x, y)\n        if winner:\n            return jsonify({'board': board, 'winner': winner})\n        current_player = 'O' if current_player == 'X' else 'X'\n        return jsonify({'board': board, 'winner': None})\n    return jsonify({'error': 'Invalid move'}), 400\n\ndef check_winner(x, y):\n    def check_direction(dx, dy):\n        count = 0\n        for i in range(-4, 5):\n            nx, ny = x + i * dx, y + i * dy\n            if 0 <= nx < 15 and 0 <= ny < 15 and board[nx][ny] == current_player:\n                count += 1\n                if count == 5:\n                    return True\n            else:\n                count = 0\n        return False\n\n    directions = [(1, 0), (0, 1), (1, 1), (1, -1)]\n    for dx, dy in directions:\n        if check_direction(dx, dy):\n            return current_player\n    return None\n\n@app.route('/reset', methods=['POST'])\ndef reset():\n    global board, current_player\n    board = [['' for _ in range(15)] for _ in range(15)]\n    current_player = 'X'\n    return jsonify({'board': board})\n\nif __name__ == '__main__':\n    app.run(debug=True, host='0.0.0.0', port=5000)\n \n", 'tags': '', 'url': 'app.py.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};