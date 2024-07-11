# @perfood/capacitor-google-fit

Capacitor plugin to read data from Google Fit.

## Install

```bash
npm install @perfood/capacitor-google-fit
npx cap sync
```

## API

<docgen-index>

* [`connect()`](#connect)
* [`disable()`](#disable)
* [`logout()`](#logout)
* [`open()`](#open)
* [`isAllowed()`](#isallowed)
* [`isPermissionGranted()`](#ispermissiongranted)
* [`isInstalled()`](#isinstalled)
* [`getHistory(...)`](#gethistory)
* [`getHistoryActivity(...)`](#gethistoryactivity)
* [`addListener('googleFitAllowed', ...)`](#addlistenergooglefitallowed)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect()

```typescript
connect() => Promise<void>
```

Connect to Google Fit

--------------------


### disable()

```typescript
disable() => Promise<void>
```

Disable Google Fit

--------------------


### logout()

```typescript
logout() => Promise<void>
```

Logout from Google Fit

--------------------


### open()

```typescript
open() => Promise<void>
```

Open

--------------------


### isAllowed()

```typescript
isAllowed() => Promise<AllowedResult>
```

Returns wether the permissions are ok or not

**Returns:** <code>Promise&lt;<a href="#allowedresult">AllowedResult</a>&gt;</code>

--------------------


### isPermissionGranted()

```typescript
isPermissionGranted() => Promise<AllowedResult>
```

Check if permission is granted

**Returns:** <code>Promise&lt;<a href="#allowedresult">AllowedResult</a>&gt;</code>

--------------------


### isInstalled()

```typescript
isInstalled() => Promise<{ value: boolean; }>
```

Check if Google Fit is installed

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### getHistory(...)

```typescript
getHistory(call: QueryInput) => Promise<DayContainer>
```

Get history

| Param      | Type                                              |
| ---------- | ------------------------------------------------- |
| **`call`** | <code><a href="#queryinput">QueryInput</a></code> |

**Returns:** <code>Promise&lt;<a href="#daycontainer">DayContainer</a>&gt;</code>

--------------------


### getHistoryActivity(...)

```typescript
getHistoryActivity(call: QueryInput) => Promise<ActivityContainer>
```

Get history activity

| Param      | Type                                              |
| ---------- | ------------------------------------------------- |
| **`call`** | <code><a href="#queryinput">QueryInput</a></code> |

**Returns:** <code>Promise&lt;<a href="#activitycontainer">ActivityContainer</a>&gt;</code>

--------------------


### addListener('googleFitAllowed', ...)

```typescript
addListener(eventName: 'googleFitAllowed', listenerFunc: (info: GoogleFitPermissionData) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'googleFitAllowed'</code>                                                                |
| **`listenerFunc`** | <code>(info: <a href="#googlefitpermissiondata">GoogleFitPermissionData</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### AllowedResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`allowed`** | <code>boolean</code> |


#### DayContainer

| Prop       | Type                       |
| ---------- | -------------------------- |
| **`days`** | <code>HistoryData[]</code> |


#### HistoryData

| Prop           | Type                | Description                                                        |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| **`start`**    | <code>string</code> |                                                                    |
| **`end`**      | <code>string</code> |                                                                    |
| **`distance`** | <code>string</code> | Distance travelled in meters. Valid range: 0—100 meters per second |
| **`speed`**    | <code>string</code> | meters per second                                                  |
| **`calories`** | <code>string</code> |                                                                    |


#### QueryInput

| Prop            | Type                                  |
| --------------- | ------------------------------------- |
| **`startTime`** | <code><a href="#date">Date</a></code> |
| **`endTime`**   | <code><a href="#date">Date</a></code> |


#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                              |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                       |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                       |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                 |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                  |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                  |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                      |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                    |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                        |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                   |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                       |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                             |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                            |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                      |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                             |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                        |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                             |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                       |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                  |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                             |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                    |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                    |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                              |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                            |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                        |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                        |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                           |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                  |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                            |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                         |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. |


#### ActivityContainer

| Prop             | Type                               |
| ---------------- | ---------------------------------- |
| **`activities`** | <code>HistoryActivityData[]</code> |


#### HistoryActivityData

| Prop             | Type                |
| ---------------- | ------------------- |
| **`start`**      | <code>string</code> |
| **`end`**        | <code>string</code> |
| **`distance`**   | <code>string</code> |
| **`speed`**      | <code>string</code> |
| **`calories`**   | <code>string</code> |
| **`activity`**   | <code>string</code> |
| **`weight`**     | <code>string</code> |
| **`steps`**      | <code>string</code> |
| **`sourceName`** | <code>string</code> |
| **`sourceType`** | <code>string</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### GoogleFitPermissionData

| Prop        | Type                                |
| ----------- | ----------------------------------- |
| **`value`** | <code>'success' \| 'failure'</code> |

</docgen-api>
