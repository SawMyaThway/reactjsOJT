import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
  "activerecord": {
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Cannot delete record because dependent %{record} exist",
          "has_one": "Cannot delete record because a dependent %{record} exists"
        }
      }
    }
  },
  "common": {
    "button": {
      "cancle": "キャンセル",
      "clear": "クリア",
      "excel": "Excel出力",
      "save": "保存"
    }
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      },
      "x_years": {
        "one": "1 year",
        "other": "%{count} years"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Second",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Your email address has been successfully confirmed.",
      "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account is not activated yet.",
      "invalid": "Invalid %{authentication_keys} or password.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid %{authentication_keys} or password.",
      "timeout": "Your session expired. Please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your email address before continuing."
    },
    "mailer": {
      "confirmation_instructions": {
        "subject": "Confirmation instructions"
      },
      "email_changed": {
        "subject": "Email Changed"
      },
      "password_change": {
        "subject": "Password Changed"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password has been changed successfully. You are now signed in.",
      "updated_not_active": "Your password has been changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.",
      "updated": "Your account has been updated successfully.",
      "updated_but_not_signed_in": "Your account has been updated successfully, but since your password was changed, you need to sign in again."
    },
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "employee": {
    "error": {
      "delete_error": "存在していないデータです。フォームをアップロードしてください。"
    },
    "filter": {
      "table": {
        "delete": "削除",
        "filter": "フィルター",
        "reset": "リセット",
        "search": "検索",
        "update": "更新"
      }
    },
    "form": {
      "columns": {
        "action": "アクション",
        "address": "住所",
        "age": "年齢",
        "birthday": "誕生日",
        "email": "メール",
        "group": "グループ",
        "name": "名前",
        "role": "ロール"
      }
    },
    "message": {
      "delete_message": "従業員が削除されました。",
      "hello": "こんにちは",
      "insert_message": "従業員が作成されました。",
      "update_message": "従業員が更新されました。"
    }
  },
  "errors": {
    "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "model_invalid": "Validation failed: %{errors}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "required": "must exist",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    },
    "unacceptable_request": "A supported version is expected in the Accept header.\n",
    "unavailable_session": "Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created."
      },
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {
        "notice": "%{resource_name} was successfully updated."
      }
    }
  },
  "hello": "Hello world",
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "home": {
    "home": "ホーム",
    "menu1": {
      "side1": "ユーザー管理",
      "side2": "社員情報",
      "title": "設定"
    }
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "other"
      ]
    }
  },
  "message": {
    "M001": "ユーザー名を入力してください。",
    "M002": "名前は10文字だけです。"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "round_mode": "default",
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "eb": "EB",
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "pb": "PB",
          "tb": "TB"
        }
      }
    },
    "nth": {
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "user": {
    "email": "メールアドレス",
    "id": "番号",
    "userName": "ユーザー名"
  }
});
I18n.translations["ja"] = I18n.extend((I18n.translations["ja"] || {}), {
  "activerecord": {
    "errors": {
      "messages": {
        "record_invalid": "バリデーションに失敗しました: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "%{record}が存在しているので削除できません",
          "has_one": "%{record}が存在しているので削除できません"
        }
      }
    }
  },
  "common": {
    "button": {
      "cancle": "キャンセル",
      "clear": "クリア",
      "excel": "Excel出力",
      "save": "保存"
    }
  },
  "date": {
    "abbr_day_names": [
      "日",
      "月",
      "火",
      "水",
      "木",
      "金",
      "土"
    ],
    "abbr_month_names": [
      null,
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    "day_names": [
      "日曜日",
      "月曜日",
      "火曜日",
      "水曜日",
      "木曜日",
      "金曜日",
      "土曜日"
    ],
    "formats": {
      "default": "%Y/%m/%d",
      "long": "%Y年%m月%d日(%a)",
      "short": "%m/%d"
    },
    "month_names": [
      null,
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "約1時間",
        "other": "約%{count}時間"
      },
      "about_x_months": {
        "one": "約1ヶ月",
        "other": "約%{count}ヶ月"
      },
      "about_x_years": {
        "one": "約1年",
        "other": "約%{count}年"
      },
      "almost_x_years": {
        "one": "1年弱",
        "other": "%{count}年弱"
      },
      "half_a_minute": "30秒前後",
      "less_than_x_minutes": {
        "one": "1分以内",
        "other": "%{count}分未満"
      },
      "less_than_x_seconds": {
        "one": "1秒以内",
        "other": "%{count}秒未満"
      },
      "over_x_years": {
        "one": "1年以上",
        "other": "%{count}年以上"
      },
      "x_days": {
        "one": "1日",
        "other": "%{count}日"
      },
      "x_minutes": {
        "one": "1分",
        "other": "%{count}分"
      },
      "x_months": {
        "one": "1ヶ月",
        "other": "%{count}ヶ月"
      },
      "x_seconds": {
        "one": "1秒",
        "other": "%{count}秒"
      },
      "x_years": {
        "one": "1年",
        "other": "%{count}年"
      }
    },
    "prompts": {
      "day": "日",
      "hour": "時",
      "minute": "分",
      "month": "月",
      "second": "秒",
      "year": "年"
    }
  },
  "employee": {
    "error": {
      "delete_error": "存在していないデータです。フォームをアップロードしてください。"
    },
    "filter": {
      "table": {
        "delete": "削除",
        "filter": "フィルター",
        "reset": "リセット",
        "search": "検索",
        "update": "更新"
      }
    },
    "form": {
      "columns": {
        "action": "アクション",
        "address": "住所",
        "age": "年齢",
        "birthday": "誕生日",
        "email": "メール",
        "group": "グループ",
        "name": "名前",
        "role": "ロール"
      }
    },
    "message": {
      "delete_message": "従業員が削除されました。",
      "hello": "こんにちは",
      "insert_message": "従業員が作成されました。",
      "update_message": "従業員が更新されました。"
    }
  },
  "errors": {
    "format": "%{attribute}%{message}",
    "messages": {
      "accepted": "を受諾してください",
      "blank": "を入力してください",
      "confirmation": "と%{attribute}の入力が一致しません",
      "empty": "を入力してください",
      "equal_to": "は%{count}にしてください",
      "even": "は偶数にしてください",
      "exclusion": "は予約されています",
      "greater_than": "は%{count}より大きい値にしてください",
      "greater_than_or_equal_to": "は%{count}以上の値にしてください",
      "inclusion": "は一覧にありません",
      "invalid": "は不正な値です",
      "less_than": "は%{count}より小さい値にしてください",
      "less_than_or_equal_to": "は%{count}以下の値にしてください",
      "model_invalid": "バリデーションに失敗しました: %{errors}",
      "not_a_number": "は数値で入力してください",
      "not_an_integer": "は整数で入力してください",
      "odd": "は奇数にしてください",
      "other_than": "は%{count}以外の値にしてください",
      "present": "は入力しないでください",
      "required": "を入力してください",
      "taken": "はすでに存在します",
      "too_long": "は%{count}文字以内で入力してください",
      "too_short": "は%{count}文字以上で入力してください",
      "wrong_length": "は%{count}文字で入力してください"
    },
    "template": {
      "body": "次の項目を確認してください",
      "header": {
        "one": "%{model}にエラーが発生しました",
        "other": "%{model}に%{count}個のエラーが発生しました"
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "選択してください"
    },
    "submit": {
      "create": "登録する",
      "submit": "保存する",
      "update": "更新する"
    }
  },
  "home": {
    "home": "ホーム",
    "menu1": {
      "side1": "ユーザー管理",
      "side2": "社員情報",
      "title": "設定"
    }
  },
  "i18n": {
    "plural": {
      "keys": [
        "other"
      ]
    }
  },
  "message": {
    "M001": "ユーザー名を入力してください。",
    "M002": "名前は10文字だけです。"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%n%u",
        "precision": 0,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "円"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "十億",
          "million": "百万",
          "quadrillion": "千兆",
          "thousand": "千",
          "trillion": "兆",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n%u",
        "units": {
          "byte": "バイト",
          "eb": "EB",
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "pb": "PB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "support": {
    "array": {
      "last_word_connector": "、",
      "two_words_connector": "、",
      "words_connector": "、"
    }
  },
  "time": {
    "am": "午前",
    "formats": {
      "default": "%Y年%m月%d日(%a) %H時%M分%S秒 %z",
      "long": "%Y/%m/%d %H:%M",
      "short": "%m/%d %H:%M"
    },
    "pm": "午後"
  },
  "user": {
    "email": "メールアドレス",
    "id": "番号",
    "userName": "ユーザー名"
  }
});
