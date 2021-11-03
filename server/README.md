# Installation
1. Clone the repository using 
`git clone https://github.com/BenzeneAlcohol/nitkracing_backend.git`
2. Run `npm install`
3. Type `nodemon index.js` <br />

The server should be up and running at port 5000. MongoDB connected would appear in the terminal to show that DB has been connected.


<table>
    <tr>
        <th colspan=6>APIs</th>
    </tr>
    <tr>
        <th>URL</th>
        <th>METHOD</th>
        <th>BODY</th>
        <th>HEADER</th>
        <th>SUCCESS</th>
        <th>REMARKS</th>
    </tr>
    <tr>
        <th colspan=6>Authentication</th>
    </tr>
    <tr>
        <td>api/auth/register</td>
        <td>POST</td>
        <td>
            username [required] <br />
            email [required] <br />
            password [required] <br />
            name [required] <br />
            designation [required] <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `ADMIN_ACCESS_TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: token <br />
            id: id <br />
        </td>
    </tr>
    <tr>
        <td>api/auth/login</td>
        <td>POST</td>
        <td>
            email [required] <br />
            password [required] <br />
        </td>
        <td>
        </td>
        <td>
            code: 200 <br />
            data: token <br />
            id: id <br />
        </td>
    </tr>
    <tr>
        <td>api/auth/:id/allow</td>
        <td>PATCH</td>
        <td>
            models [required] <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `ADMIN_ACCESS_TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: user <br />
        </td>
    </tr>
    <tr>
        <td>api/auth/:id/disallow</td>
        <td>PATCH</td>
        <td>
            models [required] <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `ADMIN_ACCESS_TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: user <br />
        </td>
    </tr>
    <tr>
        <td>api/auth/:id/change-pass</td>
        <td>PATCH</td>
        <td>
            password [required] <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `JWT_ACCESS_TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: token <br />
            id: id <br />
        </td>
    </tr>
    <tr>
        <td>api/auth/:id/recover</td>
        <td>PATCH</td>
        <td>
            email [required] <br />
        </td>
        <td>
        </td>
        <td>
            code: 201 <br />
            message: new pass sent to email <br />
        </td>
    </tr>
    <tr>
        <th colspan=6>Sponsors</th>
    </tr>
    <tr>
        <td>api/sponsors</td>
        <td>POST</td>
        <td>
            name [required] <br />
            validity [required] <br />
            website [required] <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `JWT TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: sponsor <br />
        </td>
    </tr>
    <tr>
        <td>api/sponsors/?name=`name`</td>
        <td>GET</td>
        <td>
        </td>
        <td>
        </td>
        <td>
            code: 200 <br />
            data: sponsor <br />
        </td>
    </tr>
    <tr>
        <td>api/sponsors</td>
        <td>GET</td>
        <td>
        </td>
        <td>
        </td>
        <td>
            code: 200 <br />
            data: sponsors <br />
        </td>
    </tr>
    <tr>
        <td>api/sponsors/:id</td>
        <td>PATCH</td>
        <td>
            name <br />
            validity <br />
            website <br />
        </td>
        <td>
            Authorization: <br />
            Bearer `JWT TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: sponsor <br />
        </td>
    </tr>
    <tr>
        <td>api/sponsors/:id</td>
        <td>DELETE</td>
        <td>
        </td>
        <td>
            Authorization: <br />
            Bearer `JWT TOKEN`
        </td>
        <td>
            code: 201 <br />
            data: sponsor <br />
        </td>
    </tr>
    <tr>
        <th colspan=6>Subscriptions</th>
    </tr>
    <tr>
        <td>api/subscribe</td>
        <td>POST</td>
        <td>
            email [required]
        </td>
        <td>
        </td>
        <td>
            code: 201 <br />
            message: an email has been sent for email verification <br />
        </td>
    </tr>
    <tr>
        <td>api/subscribe/:id</td>
        <td>DELETE</td>
        <td>
        </td>
        <td>
        </td>
        <td>
            code: 201 <br />
            data: subscription <br />
        </td>
    </tr>
</table>