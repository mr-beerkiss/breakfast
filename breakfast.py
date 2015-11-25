from random import shuffle
import argparse
import os

import arrow
import jinja2


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-s', '--start-date', help="start date", required=True)
    parser.add_argument('-e', '--end-date', help="end date", required=True)
    parser.add_argument('-p', '--people', nargs='+', required=True)

    args = parser.parse_args()
    start = arrow.get(args.start_date)
    end = arrow.get(args.end_date)

    template_env = jinja2.Environment(loader=jinja2.FileSystemLoader(searchpath="./"))
    template = template_env.get_template('./template.j2')

    dates = [r for r in arrow.Arrow.range('day', start, end) if r.weekday() == 3]

    people = args.people * len(dates)
    shuffle(people)

    zipped = zip(people, dates)

    output = template.render(data=zipped)
    print(output)
