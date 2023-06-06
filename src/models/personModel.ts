export interface IPerson {
    "person": {
        "id": number,
        "url": string,
        "name": string,
        "country": {
            "name": string | null,
            "code": string,
            "timezone": string
        },
        "birthday": string,
        "deathday": null,
        "gender": string,
        "image": {
            "medium": string,
            "original": string
        },
        "updated": number,
        "_links": {
            "self": {
                "href": string
            }
        }
    },
    "character": {
        "id": number,
        "url": string,
        "name": string,
        "image": {
            "medium": string,
            "original": string
        },
        "_links": {
            "self": {
                "href": string
            }
        }
    },
    "self": false,
    "voice": false
}

