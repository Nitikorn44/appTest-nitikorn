import React from 'react'

export default function Member() {
    return (
        <body>

            <div class="container mt-3">
                <h2>Member table</h2>
                <table class="table">
                    <thead>
                        <tr class="table-success">
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="./images/profile.png" width={"50"} /></td>
                            <td>Nane&Surname</td>
                            <td>Tel.</td>
                            <td><button type="button" class="btn btn-success">Read more</button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/profile.png" width={"50"} /></td>
                            <td>Nane&Surname</td>
                            <td>Tel.</td>
                            <td><button type="button" class="btn btn-success">Read more</button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/profile.png" width={"50"} /></td>
                            <td>Nane&Surname</td>
                            <td>Tel.</td>
                            <td><button type="button" class="btn btn-success">Read more</button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/profile.png" width={"50"} /></td>
                            <td>Nane&Surname</td>
                            <td>Tel.</td>
                            <td><button type="button" class="btn btn-success">Read more</button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/profile.png" width={"50"} /></td>
                            <td>Nane&Surname</td>
                            <td>Tel.</td>
                            <td><button type="button" class="btn btn-success">Read more</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </body>
    )
}
