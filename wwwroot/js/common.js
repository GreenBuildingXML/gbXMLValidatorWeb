﻿$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});
function get_root() {

    //return "http://localhost:8080/";
    return "https://gbxml-viewer.azurewebsites.net/";
    //return "http://ashrae.biimport.com/";
}


function get_root_Api() {

    //return "http://localhost:8786/";
    return "https://gbxml-api.azurewebsites.net/";
    //return "http://biimport.com/";
}

function pop_info_go(title, text, url) {
    Swal.fire({
        title: title,
        text: text
    }).then((result) => {
        window.location.href = url;
    })
}
function pop_info(title, text) {
    Swal.fire({
        title: title,
        text: text
    });
}

function login(username, pwd, token){
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'Login',
        data: {
            username: username,
            password: pwd,
            token: token
        },
        success: function (data) {
            localStorage.setItem("token", data['token']);
        },
        error: function (error) {
            pop_info("Error", "Incorrect Username or Password");
        }
    });
}
function get_token() {
    var token = localStorage.getItem("token");
    return token;
}
function clear_token() {
    localStorage.removeItem("token");
}
function get_user_info(userId) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetUserInfo',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            "userId": userId
        },
        success: function (data) {
          
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function process_error(data) {
    console.log(data['status']);
    if (data['status'] === 401 || data['status'] == 403) {
        window.location.href = "/login" + "?redirect=" + encodeURIComponent(window.location.href);
    } else {
        if (data['responseJSON'] && data['responseJSON']['message']) {
            pop_info("Error", data['responseJSON']['message']);
        } else {
            window.location.href = "/login";

        }
        
    }
}

function logout() {
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'Logout',
        success: function (data) {
            clear_token();
        }
    });
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}
/**
 * Filter contains allowed file type in lower case, has leading dot(.)
 */
function assemble_file_upload_formdata_separate(files, filters) {
    if (!files) {
        return -1;
    }

    let res = [];
    for (let i = 0; i < files.length; i++) {
        let file_name = files[i].name;
        if (filters) {
            let type = get_file_type_lowercase(file_name);
            if (!filters.includes(type)) {
                continue;
            }
        }

        let form_data = new FormData();
        form_data.append("file_0", files[i]);
        form_data.append("file_0_name", file_name);
        form_data.append("file_num", '1');
        res.push({
            'name': file_name,
            'form': form_data
        });
    }

    return res;
}

function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function downloader(data, type, name) {
    let blob = new Blob([data], { type });
    let url = window.URL.createObjectURL(blob);
    downloadURI(url, name);
    window.URL.revokeObjectURL(url);
}