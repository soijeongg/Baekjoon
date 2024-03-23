import datetime

def solution(today, terms, privacies):
    td = [int(t) for t in today.split('.')]
    today_dt = datetime.datetime(td[0], td[1], td[2])
    tm = {}
    for t in terms:
        key, value = t.split()
        tm[key] = int(value)

    ans = []
    check = []
    i = 1
    for pv in privacies:
        pvc = pv.split()
        day = [int(p) for p in pvc[0].split('.')]

        days = tm[pvc[1]]*28 + day[2] - 1
        months, days = divmod(days, 28)
        if days == 0:
            months -= 1
            days = 28
        months += day[1]
        years, months = divmod(months, 12)
        if months == 0:
            years -= 1
            months = 12
        years += day[0]

        day_dt = datetime.datetime(years, months, days)

        if today_dt > day_dt:
            ans.append(i)
        i += 1

    return ans
    answer = ans.sort()
    return answer