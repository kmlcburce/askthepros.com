@component('email.header')
@endcomponent
<span class="text">
    <h3>Receipt</h3>
    Hello {{$user['username']}}!
    <br>
    <br>
    Here is your receipt from {{env('APP_NAME')}}
    <br>
    <br>
    <br>
    <table style="width:50%">
        <tr>
            <th>Description</th>
            <th>Amount to pay</th>
            <th>Due Date</th> 
        </tr>
        <tr>
            <td>Monthly {{$data['plan']}} Subscription Plan</td>
            <td align="center">{{$data['currency']}} {{$data['amount']}}</td>
            <td align="center">{{$data['start_date']}}</td> 
        </tr>
    </table>
    <br>
    <br>
    <p>
        <b>To view your plan:</b>
    </p>
    <p>
        Login to your account and visit subsciption page.
    </p>
    
</span>
@component('email.footer')
@endcomponent